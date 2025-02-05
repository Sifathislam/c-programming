from django import forms
from .models import Transaction

class TransactionForm(forms.ModelForm):
    class Meta:
        model = Transaction
        fields = ['amount',
                  'transaction_type'
                  ]
        
        def __int__(self, *args, **kwargs):
            self.user_account = kwargs.pop('account')

            super().__init__(*args, **kwargs)
            self.fields['transaction_type'].disabled = True
            self.fields['transaction_type'].widget = forms.HiddenInput()

        def save(self, commit = True):
            self.instance.account = self.user_account
            self.instance.balance.balance_after_transaction = self.account.balance


class DepositForm(TransactionForm):
    def clean_amount(self):
        min_deposit_amount = 100
        amount = self.cleaned_data.get('amount')
        if amount < min_deposit_amount :
            raise forms.ValidationError(
                f'You need to deposte at least {min_deposit_amount} taka'
            )
        
        return amount

class WithdrawForm(TransactionForm):
    
    def clean_amount(self):
        account = self.account

        min_withdraw_amount = 500
        max_withdraw_amount = 20000

        balance = account.balance
        amount = self.cleaned_data.get('amount')
        if amount < min_withdraw_amount:
            raise forms.ValidationError(
                f'You can withdraw at least {min_withdraw_amount} Taka'
            )
        if amount > max_withdraw_amount:
            raise forms.ValidationError(
                f'You can withdraw at most {max_withdraw_amount} taka'
            )
        if amount > balance:
            raise forms.ValidationError(
                f'Your have {balance} in your account.'
                "You can't withdraw more than your account balance"
            )
        
        return amount
    
class LoanRequestForm(TransactionForm):
    def clean_amount(self):
        amount = self.cleaned_data.get('amount')

        return amount