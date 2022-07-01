let transform = (arrs) => {

    let ans = {};

    for(let arr of arrs) {

        ans[arr[0]] = arr.slice(1);

    }

    return ans;
}

module.exports = transform