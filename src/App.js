import React, { Fragment, Component } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";

const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
  { name: "item10" }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text }) => {
  return (
    <div className="menu-item">
      <div className="d-flex align-items-center">
        <span class="menu-item-avatar"></span>
        <div className="d-flex flex-column">
          <span className="menu-item-name"></span>
          <small className="menu-item-asks">asks</small>
          <p>Would you rather be Front end or...</p>
        </div>
      </div>

      <div className="menu-item-overlay"></div>
      <div className="menu-item-botton">
        <span>View Poll</span>
        <span className="menu-item-view-poll"></span>
      </div>

    </div>
  );
};

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "", className: "arrow-prev" });
const ArrowRight = Arrow({ text: "", className: "arrow-next" });

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} />;
  });

class App extends Component {
  state = {
    selected: list[0]
  };

  menu = Menu(list, this.state.selected);

  render() {
    return (
      <Fragment>
        <Navbar expand="lg" fixed="top" variant="light" className="main-navbar">
          <Container>
            <Navbar.Brand href="#home">Title</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">New question</Nav.Link>
                <Nav.Link href="#link">Leader board</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="#home">User</Nav.Link>
                <Nav.Link href="#link">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container role="main">
          <Row>
            <Col>
              <div className="answer-section">
                <h2>Unanswered Questions</h2>
                <div className="scroll-menu-wrapper">
                  {
                    <ScrollMenu
                      alignCenter={false}
                      hideSingleArrow={true}
                      data={this.menu}
                      arrowLeft={ArrowLeft}
                      arrowRight={ArrowRight}
                      selected={this.state.selected}
                      onSelect={this.onSelect}
                      wheel={false}
                    />
                  }
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="answer-section">
                <h2>Answered Questions</h2>
                <div className="scroll-menu-wrapper">
                  {
                    <ScrollMenu
                      alignCenter={false}
                      hideSingleArrow={true}
                      data={this.menu}
                      arrowLeft={ArrowLeft}
                      arrowRight={ArrowRight}
                      selected={this.state.selected}
                      onSelect={this.onSelect}
                      wheel={false}
                    />
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
