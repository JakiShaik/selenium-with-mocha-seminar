function async_ex() {
    setTimeout(() => {
        console.log('Inside setTimeout');
    },1500);
    console.log('Outside setTimeout');
}

async_ex();