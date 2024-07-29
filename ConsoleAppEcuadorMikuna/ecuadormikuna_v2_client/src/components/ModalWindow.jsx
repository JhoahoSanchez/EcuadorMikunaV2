import { styles } from "./Styles";
import Chat from "./Chat"
function ModalWindow(props) {
    return (
        <div
            style={{
                ...styles.modalWindow,
                ...{ opacity: props.visible ? "1" : "0" },
            }}
        >
            <Chat />
        </div>
    );
}
export default ModalWindow;