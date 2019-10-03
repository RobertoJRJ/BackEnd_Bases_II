--DROP PROCEDURE Crear_BasesDatos
go
CREATE PROCEDURE Crear_BasesDatos
@Nombre AS VARCHAR(50),
@Resultado AS BIT OUTPUT
AS
BEGIN TRY
	If EXISTS(SELECT name from sys.databases Where name!=@Nombre)
	Execute ('CREATE DATABASE '+@Nombre)
	SET @Resultado = 1;
END TRY
BEGIN CATCH
	SET @Resultado = 0;
END CATCH

GO
--DECLARE @Resultado BIT 
--execute Crear_BasesDatos 'Ejemplo',@Resultado;




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