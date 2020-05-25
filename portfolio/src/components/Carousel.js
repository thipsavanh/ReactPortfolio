import React from 'react';
import Card from '../components/Card';
import bookmart from '../assets/images/bookmart.png';
import ghostapp from '../assets/images/ghostapp.png';
import password from '../assets/images/password.png';
import quiz from '../assets/images/quiz.png';
import notetaker from '../assets/images/notetaker.png';
import fitnesstracker from '../assets/images/fitnesstracker.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Bookmart',
                    imgSrc: bookmart,
                    link: 'https://evening-eyrie-42464.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Ghost App',
                    imgSrc: ghostapp,
                    link: 'https://philipwking.github.io/project-1/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Password Generator',
                    imgSrc: password,
                    link: 'https://thipsavanh.github.io/PasswordGenerator/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Quiz',
                    imgSrc: quiz,
                    link: 'https://thipsavanh.github.io/QuizHomework',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Notetaker',
                    imgSrc: notetaker,
                    link: 'https://nameless-everglades-60143.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Fitness Tracker',
                    imgSrc: fitnesstracker,
                    link: 'https://arcane-forest-77094.herokuapp.com/?id=5ea4b2035d31d00017776a20',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;