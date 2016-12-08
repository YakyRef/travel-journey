import React, {Component} from 'react';
import jQuery from 'jquery';
import Block from './../Block';
import iconsMap from './iconsList';

class TimeLine extends Component {

    getIcon(account) {
        const iconPath = iconsMap[account.eventType] && iconsMap[account.eventType].icon;
        return iconPath && iconPath != '' && (
            <img src={require('./../../images/' + iconPath.replace('{currency}', account.currency && account.currency.toLowerCase()) )}/>
        );
    }

    componentDidMount() {

        jQuery(document).ready(function ($) {
            var timelineBlocks = $('.cd-timeline-block'),
                offset = 0.8;


            //hide timeline blocks which are outside the viewport
            hideBlocks(timelineBlocks, offset);

            //on scolling, show/animate timeline blocks when enter the viewport
            $(window).on('scroll', function () {
                (!window.requestAnimationFrame)
                    ? setTimeout(function () {
                    showBlocks(timelineBlocks, offset);
                }, 100)
                    : window.requestAnimationFrame(function () {
                    showBlocks(timelineBlocks, offset);
                });
            });

            function hideBlocks(blocks, offset) {
                blocks.each(function () {
                    if ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) {
                        $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
                    }
                });
            }

            function showBlocks(blocks, offset) {
                blocks.each(function () {
                    if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset &&
                        $(this).find('.cd-timeline-img').hasClass('is-hidden')) {

                        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');

                    }
                });
            }
        });
    }

    render() {
        const {events, createdDay}=this.props;
        return (
            <div>
                <section id="cd-timeline" className="cd-container">


                    <div className="babyIcon" style={{margin:"auto", textAlign: "center", zIndex:1000}}>
                       <img src={require('./../../images/baby-boy-icon.png')}/>
                        {console.log(createdDay)}
                        <div style={{backgroundColor:"#e9f0f5",fontFamily: 'Raleway, sans-serif', paddingTop:"18px", color: "#5ea2ce",padding:"20px 0 40px 0", fontWeight:"bold"}}>Born on {createdDay}</div>
                    </div>
                </section>
            </
                div >
        )
    }

}

export default TimeLine;