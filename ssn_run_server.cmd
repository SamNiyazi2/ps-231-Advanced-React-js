

Rem 07/20/2020 12:51 pm - SSN - [20200720-0738] - [005] - M03 - Full-stack JavaScript with React.js


set custom_site_port=3114

call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd %site_port%


cd %~dp0

rem start "ps-advanced-react web server" node lib/server.js
start "ps-advanced-react web server - yarn webpack" yarn webpack
start "ps-advanced-react web server - yarn dev" yarn dev

start "ps-advanced-react web page" ssn_run.cmd

