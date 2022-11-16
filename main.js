var app = new Vue (
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    chatArchive: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    chatArchive: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },      
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    chatArchive: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    chatArchive: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],  
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    chatArchive: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    chatArchive: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    chatArchive: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    chatArchive: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            contactIndex:0,
            messageText:'',
            contactSearchText:''

        },
        methods: {
            getLastMessageData(element, index){
                let archivio = element.chatArchive
                let indexOfLastMessage = archivio.length - 1

                console.log(archivio[indexOfLastMessage].message);
                console.log(indexOfLastMessage);
                console.log(archivio);
 
                return archivio[indexOfLastMessage]
            },
            getTimeOfLastMessage(element, index){
                let archivio = element.chatArchive
                let indexOfLastMessage = archivio.length - 1

                let date = archivio[indexOfLastMessage].date
                let time = date.slice(10,16)

                return time
            },
            openChat(element,index){
                return this.contactIndex = index
            },
            sliceTheDate(element, index){
                let date = element.date
                let time = date.slice(10,16)
                return time
            },
            sendMessage(element){
                if(this.messageText != ''){
                    element.push({
                        date: '10/01/2020 15:51:00',
                        message: this.messageText,
                        status: "sent",
                    });
                    this.autoReply(element)
                } else{
                    
                }
                this.messageText = ''
            },
            autoReply(element){
                setTimeout(function(){
                    element.push({
                        date: '10/01/2020 15:51:00',
                        message: 'Ok',
                        status: "received",
                    })
                },3000)
            },
            contactSearch() {
                let contatti = this.contacts
                contatti.forEach((element, index) => {
                  if (this.contactSearchText == "") {
                    this.contacts[index].visible = true;
                  } else {
                    if (
                      element.name.includes(this.contactSearchText) ||
                      element.name.toLowerCase().includes(this.contactSearchText) ||
                      element.name.toUpperCase().includes(this.contactSearchText)
                    ) {
                      element.visible = true;
                    } else {
                      element.visible = false;
                    }
                  }
                });
              },
        },
        
        
    }
)