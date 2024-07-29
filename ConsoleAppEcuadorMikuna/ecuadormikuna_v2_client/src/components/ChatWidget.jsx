import { styles } from "./Styles";
import { useState } from "react";
import ModalWindow from "./ModalWindow";

function ChatWidget() {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div>
                <ModalWindow visible={visible} />
            </div>
            <div>
                {/* Chat Button Component */}
                <div
                    onClick={() => setVisible(!visible)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        ...styles.chatWidget,
                        ...{ border: hovered ? "0.5px solid #6b0504" : "" },
                    }}
                >
                    {/* Inner Container */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Button Text */}
                        <span style={styles.chatWidgetText}>Chatea con un Asesor</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ChatWidget;