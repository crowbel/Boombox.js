module.exports = {

    name: 'stop',
    descripion: 'This is a command that stops the music playing from the play command',

    execute(message) {
        if(!message.member.voice.channel) return message.channel.send("You must be in a voice channel to stop the music")
        message.member.voice.channel.leave()
        return undefined
    }
}