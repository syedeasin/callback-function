function explain_callback(name,age,task) {
    console.log('Hello', name);
    console.log('your age', age);
    // console.log(task);
    // washhand();
    // takeShower();
    task();
}
function washhand()
{
    console.log('Wash Your Hand');
}
function takeShower()
{
    console.log('Take Shawor');
}
function scrollFacebook()
{
    console.log('Scrolling Facebook');
}
explain_callback('Easin',17, washhand);
explain_callback('Rabaya',20, takeShower);
explain_callback('Emon',15, scrollFacebook);