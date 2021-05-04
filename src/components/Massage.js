import react from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MassageCard from './MassageCard';
export default function Massage() {
    let services = [
        {
            title: "Aromatherapy",
            description: "Aromatherapy uses difference scents to promote relaxation and/or other states of being through the use of defusers, and mixed with lotions and oils. In a technique called AromaTouch, essential oils are applied directly to the skin.",
            image: "https://images.unsplash.com/photo-1565193050116-a5719c785ead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
        }
        , {
            title: "Chair Massage",
            description: "Chair massage is a popular way of relieving stress and releasing tension right in your home or workplace. You receive your massage in a specialized ergonomic chair which I bring to your location. In addition to the usual health benefits of massage, another benefit of chair massage is that it is done over the clothing. With seated massage, you can avoid the discomfort and awkwardness that you may feel in disrobing for a traditional massage. Also, chair massage sessions are usually shorter than traditional massage, making it convenient enough to fit into your busy schedule.",
            image: "https://images.unsplash.com/photo-1620011715577-c33e2b2a93c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
        },
        {
            title: "Deep Tissue Massage",
            description: "Deep Tissue Massage is a form of bodywork that aims to relieve tension in deeper layers of tissue in the body. Open communication during the session is crucial to make sure you don't get too uncomforable. Soreness is pretty common after the treatement, and plenty of water should be ingested to aid with rehydrating and promoting flow within the body that this massage has encouraged. ",
            image: ""
        },
        {
            title: "Hot Stone Therapy",
            description: "Hot Stone Therapy is a style of massage where heated stones are both placed on specific sites on your body as well as moved across your body. This style is used to deepend relazation and promote circulation. Muscles heated with the stones release tension and stress quickly and to a deep level. The experience is very relaxing, nurturing, and rejuvenating. Hot stones do have the possibilty of burning skin, and open communication is crucial during this type of session to avoid burning. Stones that are placed on the body can often be left for up to 20 or almost 30 minutes at a time. While many stones cool off before this period of time is over: some larger stones stay hot and need to be moved if it becomes uncomfortable.",
            image: "https://images.unsplash.com/photo-1524770278-65c28d8a5662?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"
        },
        {
            title: "Lymphatic Drainage",
            description: "Lymphatic Drainage Therapy aims to gently and rhythmically move the lympth through the body, esspecially in sollen areas. This relieves pressure and enhances the function of the immune system. As a preventative and remedial technique, Lymphatic Drainage can be used for a wide range of purposes which include: faster recovery from injury, reduction of swelling and discomfort during pregnancy,reduction of fatigue, and strengthened resistance to illness. Lymphatic drainage can often be suggested by a doctor to accompany treatment for lymphedema, cancer surgeries, breast impants or reductions, and various other conditions. Check with your doctor to see if Lymphatic drainage is suggested for you! ",
            image: ""
        },
        {
            title: "Myofacial Release",
            description: "Myofascial Release is a form of soft tissue therapy intended to eliminate pain, increase range of motion, increases blood circulation and rebalances the body. Techniques involved stretch the fascia and release bonds between fascia, muscles and bones. Myofascial release can fall under deep tissue work, but can also utalize light pressure to gently stretch fascia.",
            image: ""
        },
        {
            title: "Pregnancy Massage",
            description: "Pregnancy Massage is a style of bodywork designed specifically for pregnant women. This style is mostly done with the expecting mother side-lying in a comfortable position and helps her with physical and emotional channges that occur during her pregnancy. This improves joint pain, postural imbalances, and breathing and relaxation.",
            image: ""
        },
        {
            title: "Shiatsu",
            description: "Shiatsu is a Japanese form of massage therapy which translates to 'finger pressure'. In addition to stimulation of pressure points, stretching and compressions are also applied over the body to encourage the flow of Chi (energy) in the body. Shiatsu is done clothed on a table or a mat on the floor.",
            image: ""
        },
        {
            title: "Sports Massage",
            description: "Sports massage is designed for active people, particularly athletes. Sports massage uses compression, and stretching to prepare an athlete for an event, and can be done after an event to improve recovery.",
            image: ""
        },
        {
            title: "Swedish Massage",
            description: "Swedish Massage is a relaxing and therapeutic style of bodywork. It uses oils or lotion with a variety of stokes to help improve the body. This style has benefits ranging from relief of aches and pains, decreased levels of stress, enhanced mental clarity, greater flexibility and increased circulation.",
            image: ""
        },
        {
            title: "Thai Massage",
            description: "Thai Massage is more energizing and rigorous than man other forms of massage. It is also called Thai Yoga massage as the recipient is moved into a series of yoga-like poses and stretches. The recipient is fully dressed during the session and hands, knees, legs and feet are used to manipulate their body. A Thai massage session reduces stress, relieves pain, and increases energy levels which help with function at work and home.",
            image: ""
        },
        {
            title: "Trigger Point Therapy",
            description: "Trigger Point Therapy uses slower pointed techniques to target points that refer to areas of pain. This type of massage releases stress and promotes the mind-body connection.",
            image: ""
        },
        {
            title: "Reflexology",
            description: "Reflexology is a type of bodywork that focuses on applying pressure to the specific nerve zones in your feet (and hands). Unlike other foot massages that intend to mostly relieve tension in the feet themselves, reflexology is a more in-depth science that aims to harmonize your entire body. Accordin to reflecology, every part of the human body is mapped into your feet. Reflexology treatements have been found to be effective for conditions such as alleries, headaches, and depression. Hand reflexology has also been shown to be as effective as foot reflexology. Both can be used, or one can be used.",
            image: ""
        },
        {
            title: "Reiki",
            description: "Reiki is a Japanese form of energy work that cleanses and balances the energy system in the body. As a result, the body's natural self-healing mechanisms strengthen, helping to establish optimum health. During a session, I work directly with your energy field to remove blockages, detoxify your system, and restore your vital life force energy. Reiki utilizes a gentle laying on of hands to conduct the necessary energy force between us. The benefits of Reiki range from the release of habitual mental/emotional stress to alleviating chronic pain.",
            image: ""
        }]
    return (
        <div className="massage">
            
            <h2>Services</h2>
            <ul className="massage__services scroll-area">
                {services.map((service) => {
                    return (<MassageCard
                        title={service.title}
                        description={service.description}
                        image={service.image} />)
                })}
            </ul>
            <h2>About</h2>
            <p>Jenna Toff is a California Certified Massage Therapist since 2018. Certificate #75513.</p>
            <p>She studied massage therapy and health education at the National Holistic Institute, in San Jose, CA. Her studies covered Eastern and Western massage modalities.</p>
            <p>In a session, Jenna incorporates techniques from different modalities for what best treats the issues within the tissues.</p>
            <p>Always interested in learning more, Jenna is often taking additional classes and self-studying to learn additional techniques.</p>
            <p>Jenna's skillset ranges from light & relaxing, to deep & theraputic, with a targeted approach to areas of discomfort.</p>
        </div>
    )
}