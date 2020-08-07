# React-flask-API
In this repository we are connecting react application to a python api build by flask.The api takes multiple images from the local machine and returns a list of images. 
how to make this work?<br/>
Step1 : Install flask and other dependencies.<br/>
&nbsp;&nbsp;&nbsp;&nbsp; It is better to use anaconda.Otherwise pip is fine.Install flask and flask_cors<br/>
&nbsp;&nbsp;&nbsp;&nbsp; Create a folder for python code and place ImageAPI.py init.
&nbsp;&nbsp;&nbsp;&nbsp; Then type on <b>python Image.py</b> command prompt(Make sure that you are that directory where ImageAPI.py exists).<br/>
&nbsp;&nbsp;&nbsp;&nbsp; Now the API starts running on http://0.0.0.0:5000/ <br/>
Step2 : Install node and React:<br/>
Step3 : Create a react project by the fallowing command<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<b>npx create-react-app my-app</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<b>cd my-app</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<b>npm start</b><br/>
Step4 : Change the react code <br/>
&nbsp;&nbsp;&nbsp;&nbsp;Go to my-app/src directory and delete all the folders.Then place index.js and App.js of this repository.App.js contains the react code <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Where we call the API using 'fetch' keyword.<br/>
By now if everything goes right you should be able access the IamgeAPI from the react code.


