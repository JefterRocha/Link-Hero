const isURL = new RegExp('(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$', 'i')
const copyToClipboard = (text) => {
	const copyToClipboard = document.createElement('input')
	copyToClipboard.display = 'none'
	copyToClipboard.value = text
	document.body.appendChild(copyToClipboard)
	copyToClipboard.select()
	try {
		document.execCommand('copy')
		console.log('copy successfully')
	} catch (error) {
		console.error('something bad happened')
	}
	document.body.removeChild(copyToClipboard)
}
document.body.addEventListener('mouseover', (event) => {
	if (event.target.classList.contains('UFICommentActorAndBody')) {
		event.target.addEventListener('click', () => {
			const url = event.target.children[1].textContent.replace(/\s/g, '')
			if (isURL.test(url)) {
				copyToClipboard(url)
				alert('URL copied successfully\npaste in the search bar')
			}
		})
	}
})
