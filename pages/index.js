import React, { useState, useEffect, useRef } from "react"
import Link from 'next/link'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import Slider from "react-slick";

import '../sass/main.scss'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

function home(params) {
    const [trans, setTrans] = useState(0);
    const [height, setHeight] = useState(0)
    const [nav, setNav] = useState(false)
    const [op, setOp] = useState(false)

    const ref = useRef(null)
    const refSlider = useRef(null)


    function handleScroll() {
        let valueScroll = window.scrollY
        if(valueScroll){
            setTrans(valueScroll/2)
        }
        if (valueScroll > height * .65) {
            setNav(true)
        } else if (valueScroll > (height * .2) / 1.5) {
            setOp(true)
        } else if (valueScroll < (height * .65) / 1.5){
            setOp(false)
            setNav(false)
        } else if (valueScroll < height * .65) {
            setNav(false)
        }
    }

    function next(params) {
        refSlider.current.slickNext()
    }

    function prev(params) {
        refSlider.current.slickPrev()
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        setHeight(ref.current.clientHeight)
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };

    });

    return (
        <React.Fragment>
        <nav className={nav ? 'nav-init' : ''}>
            <img src="../images/identist_logo.png" width="50px" height="100%"/>
            <ul>
                <li><a>our services</a></li>
                <li><a>our professionals</a></li>
                <li><a>our clinics</a></li>
                <li><a>contact</a></li>
            </ul>
        </nav>
        <header ref={ref}>
            <div className="wrapper-bg">
                <img src="../images/bg.jpg"/>
                <h1 className={op? 'op-init' : ''}>IDentist Family Dental Care</h1>
            </div>
        </header>
        <main>
            <div className="main_wrapper" style={{ transform: `translateY(-${trans}px)` }}>
                <section className="section_one">
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item md={6}>
                                <div className="introduction1">
                                    <h2>WE'LL GET TO <br/>THE ROOT OF<br/>ANY PROBLEM .</h2>
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className="introduction2">
                                    <p>Our philosophy, our ability to listen and our attention to detail will make your visit at the dentist an experience that is sure to live up to your expectations.</p>
                                    <br/>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_two">
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item md={6}>
                                <div className="box_services">
                                    <Slider ref={refSlider} {...settings}>
                                        <div className="box_services-item">
                                            <h2>INVISALIGN / <br/>ORTHODONTICS</h2>
                                            <br/>
                                            <p>Invisalign clear braces have already led close to two millions individuals worldwide to regain full confidence in themselves by providing them with a new smile.</p>
                                            <br/>
                                            <Link href="#"><a className="button_link">Learn More</a></Link>
                                        </div>
                                        <div className="box_services-item">
                                            <h2>SCALING / <br/> POLISHING</h2>
                                            <br/>
                                            <p>Invisalign clear braces have already led close to two millions individuals worldwide to regain full confidence in themselves by providing them with a new smile.</p>
                                            <br/>
                                            <Link href="#"><a className="button_link">Learn More</a></Link>
                                        </div>
                                        <div className="box_services-item">
                                            <h2>IMPACTION / <br/> IMPACTED TOOTH EXTRACTION</h2>
                                            <br/>
                                            <p>Invisalign clear braces have already led close to two millions individuals worldwide to regain full confidence in themselves by providing them with a new smile.</p>
                                            <br/>
                                            <Link href="#"><a className="button_link">Learn More</a></Link>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="button_slider">
                                    <Grid container>
                                        <Grid item xs={6}><div className="prev" onClick={prev}><p>Prev</p></div></Grid>
                                        <Grid item xs={6}><div className="next" onClick={next}><p>Next</p></div></Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className="introduction1">
                                    <h2>OUR SERVICES .</h2>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_three">
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item md={12}>
                                <div className="introduction1">
                                    <h2>OUR PROFESSIONALS .</h2>
                                </div>
                            </Grid>
                            <Grid item md={12}>
                                <div className="box_doctor">
                                <GridList cellHeight={160} cols={3}>
                                    <GridListTile cols={1} rows={3}>
                                        <img src="/images/faikar.jpg" />
                                    </GridListTile>
                                    <GridListTile cols={1} rows={3}>
                                        <img src="/images/dokter1.jpg" />
                                    </GridListTile>
                                    <GridListTile cols={1} rows={3}>
                                        <img src="/images/dokter1.jpg" />
                                    </GridListTile>
                                    <GridListTile cols={1} rows={3}>
                                        <img src="/images/dokter1.jpg" />
                                    </GridListTile>
                                    <GridListTile cols={1} rows={3}>
                                        <img src="/images/dokter1.jpg" />
                                    </GridListTile>
                                </GridList>
                                </div>
                            </Grid>
                            <Grid item md={12} style={{display:'flex',justifyContent:'center'}}>
                                <a className="button_link">Learn More</a>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_four">
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item md={12}>
                                <div className="introduction1">
                                    <h2>OUR CLINICS .</h2>
                                </div>
                            </Grid>
                            <Grid item md={12}>
                                <div className="box_clinics">
                                    <Grid container>
                                        <Grid item md={4} style={{marginBottom:'2rem'}}>
                                            <div className="box_clinics-wrap">
                                                <img src="/images/klinik1.jpg" width="100%"/>
                                            </div>
                                        </Grid>
                                        <Grid item md={8} style={{marginBottom:'2rem'}}>
                                        <div className="box_clinics-wrap">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.56572631659!2d106.68091321449411!3d-6.320630563608754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e523c3782749%3A0x7a77f8b95dc4ac1a!2siDentist%20Golden%20Vienna%20BSD!5e0!3m2!1sen!2sid!4v1577374859236!5m2!1sen!2sid" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                                        </div>
                                        </Grid>
                                        <Grid item md={8} style={{marginBottom:'2rem'}}>
                                        <div className="box_clinics-wrap">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.56572631659!2d106.68091321449411!3d-6.320630563608754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e523c3782749%3A0x7a77f8b95dc4ac1a!2siDentist%20Golden%20Vienna%20BSD!5e0!3m2!1sen!2sid!4v1577374859236!5m2!1sen!2sid" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                                        </div>
                                        </Grid>
                                        <Grid item md={4} style={{marginBottom:'2rem'}}>
                                            <div className="box_clinics-wrap">
                                                <img src="/images/klinik1.jpg" width="100%"/>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="section_five">
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item md={12}>
                                <div className="introduction1">
                                    <h2>More than 15,000 smiles of satisfied customers</h2>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <footer>

                </footer>
            </div>
        </main>
        </React.Fragment>
    )
}

export default home