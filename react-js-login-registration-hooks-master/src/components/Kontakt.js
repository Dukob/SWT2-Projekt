import React from 'react';
import '../kontakt.css';

export const Kontakt = () => {
    return (
        <div className='kontakt-container'>
            <h3 className="font-extrabold mp-4 text-3xl">Wir Sind für Sie da...</h3>
            <p>Wir sind an jedem Tag der Woche für Sie da. Sie erreichen uns telefonisch zwischen 8 und 20 Uhr unter der Nummer<b>+49 421 085624</b></p>
            <p style={{ textAlign: 'center' }}>Sie können uns auch per E-Mail unter der folgenden Adresse kontaktieren.</p>
            <p style={{ color: 'darkblue' }}><b><u>Email:</u> kontakt@lendmove.dev</b></p>

            <form>
                <div>
                    <label className="block" htmlFor="betreff">Betreff der Mail</label>
                    <input className="border" type="betreff" name="betreff" id="betreff" placeholder="Sie Ihren Text" />
                </div>

                <div>
                    <label className="block" htmlFor="email">Email</label>
                    <input className="border" type="email" name="email" id="email" placeholder="Ihre E-Mail-Adresse" />
                </div>

                <div>
                    <label className="block" htmlFor="nachricht">Nachricht</label>
                    <textarea rows={10} className="border resize-none" name="nachricht" id="nachricht" placeholder="geben Sie Ihre Mitteilung ein" />
                </div>

                <input type="submit" className="block bg-[purple] text-[white] py-3 px-3 hover:bg-[gray]" />

            </form>
        </div>
    )
}

export default Kontakt;