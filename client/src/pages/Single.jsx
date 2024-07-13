import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png'
import {Link} from "react-router-dom";
import Menu from "../components/Menu.jsx";


const Single = () => {

    return (
        <div className="single">
            <div className="content">
                <img src="https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953"/>
                <div className="user">
                    <img src="https://th-thumbnailer.cdn-si-edu.com/LlpzsawSAkSUDonNwEd0zQrQaR4=/fit-in/1600x0/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"/>
                    <div className="info">
                        <span>Thikshana</span>
                        <p>Posted 12 hours ago</p>
                    </div>
                    <div className="edit">
                        <Link to={'/write?edit=2'}>
                            <img src={Edit} alt="edit"/>
                        </Link>
                        <img src={Delete} alt="delete"/>

                    </div>
                </div>
                <h1>Orange Cat Sleep Guide</h1>
                <p>Before attempting to adjust your cat’s sleep schedule with behavioral modifications, make sure they
                    don’t have an underlying medical problem that causes them to stay awake at night. Painful
                    conditions, hormonal imbalances, flea infestations, eye conditions and deafness can make it
                    difficult for your tired cat to sleep peacefully.

                    If your cat seems restless during the day, too, take her to the vet to rule out these health
                    concerns. “For example, some senior animals lose their hearing, so their loud meowing is to try to
                    hear their own noises,” explains Dr. Rachel Barrack, a licensed veterinarian and certified animal
                    acupuncturist. Older cats may also increase their cat sounds at night because they cannot see as
                    well, so consider leaving some lights on when you go to bed.

                    Also note that at certain life stages, a cat waking up at night is actually to be expected. Kittens,
                    for example, have lots of energy to spare!

                    Your cat may be waking you up at night simply because they want to play. They probably slept the
                    entire time you were at work—after all, it’s boring to be all alone! Now that you’re home, they
                    think it’s playtime. Despite a reputation as a solitary animal, many cats love to play and interact
                    with humans and other animals.

                    If you’re suffering through a lot of cat yowling at night, be cautious about giving your feline
                    attention at 2 a.m. When you give cats the attention they desire—by petting them or rubbing their
                    chin—it reinforces the behavior.

                    Playing active games with your cat during the day is a great way to burn off their energy and give
                    them the attention they crave. Cats are less needy when they’ve been well-exercised. A tired cat is
                    a sleeping cat!
                    <br/><br/>


                    The Jackson Galaxy Mojo Maker wand cat toy is made for cats who love a ground pursuit. Drag it along
                    the floor to mimic the motion of a mouse, and watch your kitty start pouncing and chasing. It’s
                    great for building their confidence, which in turn gives them mojo. The telescoping 64-inch wand
                    allows you to better direct the play, and the retractable cord prevents tangles so the fun never
                    gets interrupted.

                    The SmartyKat Hot Pursuit cat toy is another great option for burning off your cat’s energy. With
                    two electronic speeds, the concealed feathered wand spins around the base unpredictably, mimicking
                    pounce-able prey. At the end of the day, all this play will result in a sleeping cat!

                    If you are absent for the majority of the day, you can try an interactive toy that encourages
                    independent play. The Petstages Tower of Tracks cat toy is a great option that allows your cat to
                    enjoy an action-packed afternoon even when you’re not at home

                    Once you’ve exercised your cat, it’s important to reinitiate a bedtime routine that says, “It’s time
                    to settle down.”
                    <br/><br/>

                    Cats often become sleepy after a big meal, so feed your cat a filling, delicious dinner before bed.
                    Natural Balance Chicken Meal & Salmon Meal Formula dry cat food is a gluten-free kibble with an
                    optimal balance of premium proteins and key nutrients that will fill your cat’s belly up and help
                    ease them into sleep mode.

                    Turn the lights down low and lower the volume on your television to create a quiet, calming
                    environment. A sleeping kitten or a sleeping cat needs a comfy, soft and safe spot to rest to
                    promote good sleeping habits. If you are looking to upgrade your cat’s sleeping quarters, try the
                    Ethical Pet Cuddle Cave cat bed. This pocketed burrow with faux-fur and micro-suede gives your cat
                    plenty of privacy and warmth for a restful night of sleep. Keep in mind that cats can be picky about
                    their sleeping spot, so try placing their bed in different quiet corners of the house to see which
                    spot your cat feels the most comfortable in.

                    Once you find a good sleeping spot for your cat, try to keep it there for as long as possible.
                    Consistency is extremely important when it comes to altering your cat's sleep schedule.
                </p>

            </div>

            <Menu />

        </div>
    );

}

export default Single
