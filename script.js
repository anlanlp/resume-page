// 返回顶部交互效果
const backTopBtn = document.getElementById('backTop');

// 滚动显示按钮
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backTopBtn.style.display = 'block';
    } else {
        backTopBtn.style.display = 'none';
    }
});

// 点击返回顶部
backTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

console.log('简历页面加载完成 ✅');