import { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import ProjectList from './ProjectList/ProjectList';

const dbProjects = [
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg", category: "Business Cards"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg", category: "Business Cards"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png", category: "Flayers"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg", category: "Business Cards"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg", category: "Websites"}, 
    {img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png", category: "Flayers"}
];

class Portfolio extends Component {
    state = {
        selected: "All"
    };

    handleSelectFilter = (filter) => {
        this.setState({ selected: filter });
    };

    render() {
        const projectsFiltered = this.state.selected === "All"
            ? dbProjects
            : dbProjects.filter(p => p.category === this.state.selected);

        const categories = ["All", "Websites", "Flayers", "Business Cards"];

        return (
            <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
                <Toolbar
                    filters={categories}
                    selected={this.state.selected}
                    onSelectFilter={this.handleSelectFilter}
                />

                <ProjectList projects={projectsFiltered} />
            </div>
        );
    }
}

export default Portfolio;
