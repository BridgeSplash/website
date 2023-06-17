'use client';
import React, { useEffect, useState } from 'react';

export default function Status({ ip = "play.bridgesplash.net", port = "25565" }: { ip?: string, port?: string }) {
    const [playerCount, setPlayerCount] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        updatePlayercount(ip, port);

        const interval = setInterval(() => {
            updatePlayercount(ip, port);
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, [ip, port]);

    const handleCopyClick = () => {
        const element = document.querySelector('.sip');
        if (element) {
            const range = document.createRange();
            range.selectNode(element);
            window.getSelection()?.removeAllRanges();
            window.getSelection()?.addRange(range);

            document.execCommand('copy', true, "bridgesplash.net");
            window.getSelection()?.removeAllRanges();

            setErrorMessage("IP copied!");
            setTimeout(() => {
                setErrorMessage(null);
            }, 800);
        }
    };

    const updatePlayercount = (ip: string | null, port: string | null) => {
        if (ip === null || port === null) return;

        fetch(`https://mcapi.us/server/status?ip=${ip}&port=${port}`)
            .then((response) => response.json())
            .then((result) => {
                if (result.hasOwnProperty('online') && result.online) {
                    if (result.status === 'success') {
                        setPlayerCount(result.players.now);
                    } else {
                        setErrorMessage("Server isn't online!");
                    }
                } else {
                    setErrorMessage("Server isn't online!");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            {errorMessage ? (
                <div className="playercount">{errorMessage}</div>
            ) : (
                <div className="playercount">
                    <p>Join <span className="sip">{playerCount}</span> other players on <span className="ip" onClick={handleCopyClick}>{ip}</span></p>
                </div>
            )}
        </div>
    );
};
