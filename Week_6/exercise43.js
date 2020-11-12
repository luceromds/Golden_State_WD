let returnDay = (num) => {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(num >= 1 && num < 8 ){
        return daysOfWeek[num-1]
    } else {
        return null
    }
} 