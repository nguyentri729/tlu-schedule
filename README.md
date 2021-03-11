# tlu-schedule

Get a study schedule on the ThuyLoi University registration page.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
npm install tlu-schedule
```

## Usage
- Get student info: 
```javascript
const { k61 } = require("tlu-schedule");

(async () => {
  await k61.auth({ username: "username", password: "pwd" });
  const currentUser = await k61.getCurrentUser();
  console.log(currentUser);
})();

```
- Get student schedule: 
```javascript
const { k61 } = require("tlu-schedule");

(async function getStudentSchedule() {
  await k61.auth({ username: "1951061068", password: "12345678" });
  const {id} = await k61.getSemesterInfo(); // get id of current semester 
  const schedules = await k61.getStudentCourseSubject(id); 
  return schedules
})();
```
## Functions
```javascript
const { k61 } = require("tlu-schedule");
k61.auth(username: string, password: string); 
k61.getSemesterInfo(); 
k61.getStudentCourseSubject(semesterId: number); 
k61.getStudentmMark(); 

```

## License
[MIT](https://choosealicense.com/licenses/mit/)