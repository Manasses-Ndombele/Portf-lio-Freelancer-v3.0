import MainHeader from './components/MainHeader'
import IntroArea from './components/IntroArea'
import SolutionsArea from './components/SolutionsArea'
import SkillsArea from './components/SkillsArea'
import ProjectsArea from './components/ProjectsArea'
import HistoryArea from './components/HistoryArea'
import BudgetContainer from './components/BudgetContainer'
import MainFooter from './components/MainFooter'

function App() {
    return (
        <>
            <MainHeader />
            <main>
                <IntroArea />
                <SolutionsArea />
                <SkillsArea />
                <ProjectsArea />
                <HistoryArea />
                <BudgetContainer />
            </main>
            <MainFooter />
        </>
    )
}

export default App
