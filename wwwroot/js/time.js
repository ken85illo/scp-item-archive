function updateTime() {
    const now = new Date()
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    })
    document.getElementById('time').textContent = timeString
}

updateTime()
setInterval(updateTime, 1000)
