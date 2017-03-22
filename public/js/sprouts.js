let number = 1
$('.more-sprouts').on('click', (event) => {
  event.preventDefault()

  number++
  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + number
  })

  request.done((data) => {
    data.forEach((tweet) => {
      $('.tweets').append('<li class="tweet">' +
                            '<div class="body">' +tweet.text + '</div>' +
                            '<div class="user">' + tweet.username + '</div>' +
                          '</li>')
    })
  })
})
