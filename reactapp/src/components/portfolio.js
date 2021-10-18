import '../css/Portfolio.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';

// data analytics images imports
import covid19 from '../images/portfolio/Covid19Analysis.jpg';
import collisionStats from '../images/portfolio/CollisionStats.jpg';

// financial softwares images imports
import stockVtso from '../images/portfolio/StockValuationVSTO.jpg';
import investmentDash from '../images/portfolio/InvestmentDashboard.jpg'
import loanAmortization from '../images/portfolio/LoanAmortization.jpg'
import internationalFinance from '../images/portfolio/InternationalFinanceApp.jpg'

// KPI dashboards images
import datastudio from '../images/portfolio/KpiGoogleDataStudio.jpg';
import powerBI from '../images/portfolio/PowerBi.png';

function card(title, description, link, imagePath){
    var projectComplete = "Go to Project"
    if (title.includes("COMING SOON")){
        projectComplete = projectComplete + " Progress"
    }
    return (
        <div className="portfolioCard">
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={imagePath} />
                    <Card.Body>
                        <Card.Title><b>{title}</b></Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text><i>
                            Frameworks/Libraries used:
                        </i></Card.Text>
                        <Button variant="outline-dark" onClick={
                            () => GoToLink(link)
                            }>
                            {projectComplete}
                        </Button>
                    </Card.Body>
            </Card>
        </div>
    )
}

const portfolio = () => {
    return (
        <div className="Portfolio">
            <div className="portfolio-header">
                <h1>Portfolio & Projects</h1>
            </div>
            <hr className="divider"/>
            <br/>
            <br/>


            {/* DATA ANALYSIS/SCIENCE PROJECTS SECTIONS  
                    - Python Jupyter notbook => URL
                    - Car Statistics Python Dash => Web App
                    - NBA Statistics Jupyter Notebook
                    - Immagration Statistics => RStudio 
            */}
            <div className="data-analysis-container">
                <div className="data-analysis-header">
                    <h4>Data Science & Analytics</h4>
                </div>
                <br/>
                <div className="CardsContainer">
                    {card(
                        "Covid-19 Analysis", 
                        "This project uses Python libraries such as Pandas, NumPy, and scikit-learn to understand and analyze the Covid-19 Pandemic.",
                        "https://github.com/matthewmyrick/DataAnalyticsPortfolio/blob/main/Covid19/Covid19_Data_Analysis.ipynb",
                        covid19
                        )}
                    {card(
                        "Car Statistics Analysis COMING SOON",
                        "This project uses Google Colab to develop analytics and statistical predictions of car accidents in San Francisco Bay Area.",
                        "https://github.com/matthewmyrick/DataAnalyticsPortfolio/blob/main/US%20Collision/Collision_Data_Analysis.ipynb",
                        collisionStats
                    )}
                    {card(
                        "NBA Stats Analysis COMING SOON", 
                        "This project uses Python libraries such as Pandas, NumPy, and scikit-learn to understand and analyze the statistical leaders in the National Basketball Association (NBA).",
                        "/",
                    
                        )}
                    {card(
                        "Immigration Statistics COMING SOON", 
                        "This project uses R to understand and visualize immigration data from the past year.",
                        "/",
                        
                        )}
                </div>
            </div>
            
            {/* FINANCIAL ANALYSIS PROJECTS SECTIONS  
                    - Investment Analysis Flask & Chart Js Dashboard => Web App 
                    - VSTO C# DCF Model Add in => Github / Excel
                    - Loan Amortization C# Application => Web App
                    - International Finance App => Github
            */}
            <br/>
            <br/>
            <div className="data-analysis-container">
                <div className="data-analysis-header">
                    <h4>Financial Modeling & Analytics</h4>
                </div>
                <br/>
            <div className="CardsContainer">
                    {card(
                        "Investment Analysis / Modeler Excel Add-In", 
                        "This Project uses the C# VSTO framework to create an Excel add in software that allows users develop faster financial models and valuations on publicly listed companies",
                        "https://github.com/matthewmyrick/StockValuationExcelAddIn",
                        stockVtso
                        )}
                    {card(
                        "Investment Analysis Flask-ChartJs Dashboard",
                        "This dashboard focuses on statistical analysis of correlation coefficients and reducing portfolio risk.",
                        "https://stockanalysisdashboard.herokuapp.com/",
                        investmentDash
                    )}
                    {card(
                        "Loan Amortization Web Application", 
                        "This project uses the MVC .NET Core framework to demonstrate period payments on amortized loans.",
                        "https://loanamortization20211004033721.azurewebsites.net/",
                        loanAmortization
                        )}
                    {card(
                        "International Finance Desktop Application", 
                        "This project uses the Tkinter Python library to develop an application I used for my international finance class, which assisted me with problems like Interest Rate Parity's, Cross Rates, and Triangular Arbitrage.",
                        "https://github.com/matthewmyrick/InternationalFinanceApp",
                        internationalFinance
                        )}
                </div>
            </div>

            {/* DATABASE APPLICATIONS PROJECTS SECTIONS  
                    - Electron JS & Salesforce Rest API => Github & .exe
                    - Local C# WPF SQL Database => Github & .exe
                    - Python PostgreSQL CRM Django Application => Web App
                    - Python Rest API
            */}


            {/* KPI DASHBOARDS PROJECTS SECTIONS  
                    - Google Data Studio Web App => URL
                    - PowerBI Dashboard => Github
                    - 
                    - 
            */}
            <br/>
            <br/>
            <div className="data-analysis-container">
                <div className="data-analysis-header">
                    <h4>KPI Dashboards</h4>
                </div>
                <br/>
                <div className="CardsContainer">
                    {card(
                        "PowerBI Dashboard", 
                        "This Dashboard is run on PowerBI and analyzes customer order data using segmentation strategies and high level statistical analysis.",
                        "https://github.com/matthewmyrick/KPIDashboard/tree/main/PowerBi",
                        powerBI
                        )}
                    {card(
                        "Google Data Studio KPI Dashboard",
                        "This project uses mock customer data to develop 3 different types of Dashboards: Revenue, Expenses, and Profits. After the Google Data Studio Dashboards were finished, they were published to a Google site. ",
                        "https://sites.google.com/view/kpidashboard/home",
                        datastudio
                    )}
                    {card(
                        "Covid-19 Analysis", 
                        "This project uses Python libraries such as Pandas, NumPy, and scikit-learn to understand and analyze the Covid-19 Pandemic",
                        "https://github.com/matthewmyrick/DataAnalyticsPortfolio/blob/main/Covid19/Covid19_Data_Analysis.ipynb",
                        covid19
                        )}
                    {card(
                        "Covid-19 Analysis", 
                        "This project uses Python libraries such as Pandas, NumPy, and scikit-learn to understand and analyze the Covid-19 Pandemic",
                        "https://github.com/matthewmyrick/DataAnalyticsPortfolio/blob/main/Covid19/Covid19_Data_Analysis.ipynb",
                        datastudio
                        )}
                </div>
            </div>

            {/* Fun Software Applications
                    - Portfolio/Custom React => Web App 
                    - Pomorodo Java App => Github 
                    - 
                    - 
            */}

        </div>
    )
}

function GoToLink(link){
    window.open(
        link, 
        "_blank");
}

export default portfolio
