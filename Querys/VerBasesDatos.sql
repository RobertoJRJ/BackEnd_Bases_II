--DROP PROCEDURE Ver_BasesDatos
CREATE PROCEDURE Ver_BasesDatos
@Resultado AS BIT OUTPUT
AS
BEGIN TRY
	SELECT name, database_id
	FROM sys.databases ;
END TRY
BEGIN CATCH
	SET @Resultado = 0;
END CATCH
GO
--DECLARE @Resultado BIT 
--execute Ver_BasesDatos @Resultado