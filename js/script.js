const app = new Vue({
	el: "#app-wrapper",
	data: {
		user: {
			userFullName: "Marcella Bella",
			avatar: "_io",
			currentActiveChat: 0,
			textEditorDraft: "",
			chatFilter: "",
		},
		contacts: [
			{
				name: "Michele",
				avatar: "_1",
				visible: true,
				draftMsg: "",
				messages: [
					{
						date: "10/01/2020 15:30:55",
						text: "Hai portato a spasso il cane?",
						status: "sent",
					},
					{
						date: "10/01/2020 15:50:00",
						text: "Ricordati di dargli da mangiare",
						status: "sent",
					},
					{
						date: "10/01/2020 16:15:22",
						text: "Tutto fatto!",
						status: "received",
					},
				],
			},
			{
				name: "Fabio",
				avatar: "_2",
				visible: true,
				draftMsg: "",
				messages: [
					{
						date: "20/03/2020 16:30:00",
						text: "Ciao come stai?",
						status: "sent",
					},
					{
						date: "20/03/2020 16:30:55",
						text: "Bene grazie! Stasera ci vediamo?",
						status: "received",
					},
					{
						date: "20/03/2020 16:35:00",
						text: "Mi piacerebbe ma devo andare a fare la spesa.",
						status: "sent",
					},
				],
			},
			{
				name: "Samuele",
				avatar: "_3",
				visible: true,
				draftMsg: "",
				messages: [
					{
						date: "28/03/2020 10:10:40",
						text: "La Marianna va in campagna",
						status: "received",
					},
					{
						date: "28/03/2020 10:20:10",
						text: "Sicuro di non aver sbagliato chat?",
						status: "sent",
					},
					{
						date: "28/03/2020 16:15:22",
						text: "Ah scusa!",
						status: "received",
					},
				],
			},
			{
				name: "Luisa",
				avatar: "_6",
				visible: true,
				draftMsg: "",
				messages: [
					{
						date: "10/01/2020 15:30:55",
						text: "Lo sai che ha aperto una nuova pizzeria?",
						status: "sent",
					},
					{
						date: "10/01/2020 15:50:00",
						text: "Si, ma preferirei andare al cinema",
						status: "received",
					},
				],
			},
		],
	},
	methods: {
		//opens the chat convo of the clicked contact and store current message Draft
		openChat: function (contactIndex) {
			//updatine active contact draftMsg
			this.contacts[
				this.user.currentActiveChat
			].draftMsg = this.user.textEditorDraft;
			//changing current active chat draft to new index
			this.user.currentActiveChat = contactIndex;
			//updating the text editor with the new active chat draftmsg
			this.user.textEditorDraft = this.contacts[
				this.user.currentActiveChat
			].draftMsg;
		},
		//appends texteditor Input to contacts[currentActriveChat].messages[]
		sendMessage: function () {
			const newMessage = {
				date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
				text: this.user.textEditorDraft,
				status: "sent",
			};
			this.contacts[this.user.currentActiveChat].messages.push(newMessage);
			//cleaning input text from new message text
			this.user.textEditorDraft = "";
			this.autoReply();
		},
		//generates a new message from contact and appends it to the messages after a 1000 ms delay
		autoReply: function () {
			const autoReplyTimer = setTimeout(() => {
				const newMessage = {
					date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
					text: "ok",
					status: "received",
				};
				this.contacts[this.user.currentActiveChat].messages.push(newMessage);
			}, 1000);
		},
	},
});
