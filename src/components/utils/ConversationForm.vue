<template>
    <div class="myForm" />
</template>
<script>
import { ConversationalForm } from 'conversational-form'
export default {
    name: 'MyForm',
    data() {
        return {}
    },
    mounted() {
        this.setupForm()
    },
    methods: {
        setupForm() {
            const formFields = [
                {
                    tag: 'input',
                    type: 'text',
                    name: 'firstname',
                    'cf-questions': '你姓啥？'
                },
                {
                    tag: 'input',
                    type: 'text',
                    name: 'lastname',
                    'cf-questions': '你名啥？'
                },
                {
                    tag: 'fieldset',
                    type: 'radio',
                    name: 'isPig',
                    'cf-questions': '你是🐷吗？',
                    children: [
                        {
                            tag: 'input',
                            type: 'radio',
                            'cf-label': '是',
                            value: 'yes'
                        },
                        {
                            tag: 'input',
                            type: 'radio',
                            'cf-label': '否',
                            value: 'no',
                            disabled: 'true'
                        }
                    ]
                }
            ]
            this.cf = ConversationalForm.startTheConversation({
                options: {
                    submitCallback: this.submitCallback,
                    preventAutoFocus: true
                },
                tags: formFields
            })
            this.$el.appendChild(this.cf.el)
        },
        submitCallback() {
            const formDataSerialized = this.cf.getFormData(true)
            console.log('Formdata, obj:', formDataSerialized)
            this.cf.addRobotChatResponse('你真顶。去控制台看你输入的答案吧。')
        }
    }
}
</script>

<style lang="scss" scoped>
.myForm {
    position: relative;
    height: 600px;
    width: 100%;
}
</style>
