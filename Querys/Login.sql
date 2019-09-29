--DROP PROC CONECTADO
CREATE PROC CONECTADO
@Resultado AS BIT OUTPUT
AS
BEGIN
	SET @Resultado = 1;
END 
go
--DECLARE @Resultado BIT
--EXECUTE CONECTADO @Resultado;

--DROP PROC PRUEBA
CREATE PROC PRUEBA
@Resultado AS BIT OUTPUT
AS
BEGIN
	Select * from TablaPrueba
	SET @Resultado = 1;
END 
go
--DECLARE @Resultado BIT 
--execute PRUEBA @Resultado