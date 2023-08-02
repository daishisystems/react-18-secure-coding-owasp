function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function InjectScript() {

    const inject = async () => {
        setCookie("myCookie", "PAYLOAD", 3)
    };

    const getCookie = async (name) => {
        let cookieName = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];

            while (c.startsWith(' ')) {
                c = c.substring(1);
            }
            if (c.startsWith(cookieName)) {
                console.log(decodedCookie)
                return c.substring(cookieName.length);
            }

        }

        return "";
    }
      
    return (
      <div>      
            <button onClick={inject}>Inject</button>      
            <button onClick={() => getCookie("myCookie")}>Get Cookie</button>
      </div>
    );
  }
  
  export default InjectScript;
  