<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Home page</title>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<div id="wrapper">
		<div id="header"><%@include file="header.jspf" %></div>
		<div id="topbar"><%@include file="topbar.jspf" %></div>
		<div id="content"><%@include file="content.jspf" %></div>
		<div id="footer"><%@include file="footer.jspf" %></div>
	</div>
</body>
</html>