CREATE PROCEDURE Ver_BasesDatos
@Resultado AS BIT OUTPUT
AS
BEGIN TRY
	SELECT name
	FROM sys.databases ;
END TRY
BEGIN CATCH
	SET @Resultado = 0;
END CATCH
GO
--DECLARE @Resultado BIT 
--execute Ver_BasesDatos @Resultado