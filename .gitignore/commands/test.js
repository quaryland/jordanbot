module.exports = class Test {

   static match(message) {
        return message.content.startsWith('!test')
    }

   static action (message) {
        args = message.content.split(' ')
        args.shift()
        message.reply('ceci est un test' + args.join('%20'))
    }

}
