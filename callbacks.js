function getRandomNumber() {
    setTimeout(() => {
        let output = Math.random();
        // posts.forEach((post, index) => {
        //     output += `<li>${post.title}</li>`;
        // });
        document.body.innerHTML = output;
    }, 500);
}

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500)
});

Promise.all([promise1]).then(function(values) {
    console.log();
});
    async function fetchRandomNumber() {
      const result = await getRandomNumber();
      console.log(Math.random());
    }

    fetchRandomNumber();




