export default class BindID {
  constructor(options = {}) {
    this.options = {
            apiCompat: 'latest',
            disableStateValidation: false,
            ...options
        }

        if(!this.options.clientId){
            throw new Error('[BindID] You need to set a clientID.');
        }
        
        if(!this.options.wait){
            this.init();
        }
    };

    getClientID = () =>{
        return this.options.clientId;
    }

    async init() {
        if(this.loadingPromise) {
            return this.loadingPromise;
        }

    this.loadingPromise = new Promise((resolve) => {
            const {
                clientId,
                apiCompat,
                disableStateValidation
            } = this.options;

            if(window.XmBindId && window.XmBindId.isInitialized){
                resolve(window.XmBindId);
            }

            if (window.document.getElementById('bindid-sdk')) {
                return resolve(window.XmBindId);
            }
        
            const js = window.document.createElement('script');
            js.async = true;
            js.defer = true;
            js.src = `https://signin.bindid-sandbox.io/bindid-sdk/transmit-bind-id-sdk.js`;
            js.id = 'bindid-sdk';

            window.document.body.appendChild(js);

            js.onload = () => {
                window.XmBindId.initialize({
                    clientId: clientId,
                    apiCompat: apiCompat ? apiCompat : 'latest',
                    disableStateValidation: disableStateValidation ? disableStateValidation : false
                }).then(() => {
                    window.XmBindId.isInitialized = true;
                    resolve(window.XmBindId);
                });
            }
 
            return this.loadingPromise;
        });
    }
}