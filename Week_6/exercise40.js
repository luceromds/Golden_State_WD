let lastElement = (arr) => {
    if(arr.length === 0){
        return null
    } else {
        return arr.slice(arr.length - 1, arr.length)
	}
    
}