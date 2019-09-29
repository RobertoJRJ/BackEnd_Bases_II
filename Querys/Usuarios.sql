--DROP LOGIN [Usuario1]
--DROP USER [Usuario1]
USE [master]
GO
CREATE LOGIN [Usuario1] WITH PASSWORD=N'pass123' MUST_CHANGE, DEFAULT_DATABASE=[master], CHECK_EXPIRATION=ON, CHECK_POLICY=ON
GO
USE [Prueba]
GO
CREATE USER [Usuario1] FOR LOGIN [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_datareader] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_owner] ADD MEMBER [Usuario1]
GO
USE [Prueba]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [Usuario1]
GO
USE [master]
GO
ALTER USER [Usuario1] WITH DEFAULT_SCHEMA=[dbo]
GO
USE [master]
GO
ALTER ROLE [db_owner] ADD MEMBER [Usuario1]