-- IN HERE WE WILL SEE HOW WE CAN WIRTE THE CODE FOR SUBQUREY

-- FIRST QUSTION IS WHOSE EMPLOYEES GET SALARY LESS THAN EMPLOYEE ID 144
-- MAIN QUREY
SELECT *
FROM EMPLOYEES
WHERE SALARY < (-- SUB QUREY
				SELECT SALARY
				FROM EMPLOYEES
                WHERE EMPLOYEE_ID = 144
                );

-- SECOND QUSTION IS WHO GET THE HIGHEST SALARY FOR ALL THE EMPLOYEESE SHOW THE INFORMATION
-- MAIN QUREY
SELECT *
FROM EMPLOYEES
WHERE SALARY = (-- SUB QUREY
				SELECT MAX(SALARY)
                FROM EMPLOYEES
				);

-- THIRD QUSTION IS WHOSE EMPLOYEES WORK ON MERKETTING DEPARTMENT AND SHOW THERE AVARAGE SALARY
-- MAIN QUREY FIRST WE SEE INFO THAN WE SEE THE AVARAGE SALARY OF ALL OF THOSE
SELECT *
FROM EMPLOYEES
WHERE DEPARTMENT_ID = (-- SUBQUREY
						SELECT DEPARTMENT_ID
                        FROM DEPARTMENTS
                        WHERE DEPARTMENT_NAME = 'MARKETING');
-- AVARAGE
SELECT AVG(SALARY)
FROM EMPLOYEES
WHERE DEPARTMENT_ID = (-- SUBQUREY
						SELECT DEPARTMENT_ID
                        FROM DEPARTMENTS
                        WHERE DEPARTMENT_NAME = 'MARKETING');
                        


-- FORTH QUSTION IS HOW EMPLOYEES WORK ON IT DEPRATMETN
-- MAIN QURY
SELECT COUNT(*)
FROM EMPLOYEES
WHERE DEPARTMENT_ID = (-- SUBQUERREY
						SELECT DEPARTMENT_ID
                        FROM DEPARTMENTS
                        WHERE DEPARTMENT_NAME = 'IT'
                        );
-- FIFTH QUSTION IS HOW MOUCH SALARY WE GIVES TO THE PROGRAMMERS
-- MAIN QUERY
SELECT SUM(SALARY)
FROM EMPLOYEES
WHERE JOB_ID = (-- SUBQUERY
					  SELECT JOB_ID
                      FROM JOBS
                      WHERE JOB_TITLE = "PROGRAMMER"
                      );