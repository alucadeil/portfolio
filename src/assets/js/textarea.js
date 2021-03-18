const textArea = document.querySelectorAll('[data-autoresize]')

textArea.forEach(item => {
    let textAreaHeight = item.offsetHeight
    item.addEventListener('input', event => {
        let $this = event.target
        $this.style.height =  textAreaHeight +'px'
        $this.style.height = $this.scrollHeight + 'px'
    })
})