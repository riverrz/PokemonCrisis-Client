
        $(window).load(function(){

    $(document).ready(function() {
        var tabs = $("#container-1").tabs();
        var tabCounter = 1;

        $('#lobby_chat').click( function(){
            var ul = tabs.find( "ul" );
            var current_idx = ul.find("li").length + 1;
            $("<li><a href='#fragment-" + current_idx + "'>Lobby</a></li>" ).appendTo( ul );
            tabs.append("<center><div style='z-index:4; ' id='fragment-" + current_idx + "'><div class='infobox infobox-roomintro'><div><div style='text-align: center ; margin: auto'> <span style='font-size: 14pt ; font-family: &quot;verdana&quot;'><strong><font color='5277b2'>Welcome To Lobby!</font></strong></span><br> <span style='font-size: 9pt ; font-family: &quot;verdana&quot;'> PokemonCrisis - Official Server</span><br> <img src='https://i.imgur.com/Xl1JWPE.gif' width='64' height='64'> <div class='useful-links' style='font-size: 9pt'> <span style='font-family: &quot;tahoma&quot;'><a href='https://www.smogon.com/forums/threads/bug-reports-v2-0-read-op-before-posting.3469932/' target='_blank' rel='noopener'>Bug Reports</a> | <a href='https://www.smogon.com/forums/threads/technical-support-mk-2-read-op-before-posting.3469929/' target='_blank' rel='noopener'>Technical Support</a> | <span style='font-family: &quot;tahoma&quot;'><a href='https://docs.google.com/document/d/1Qw55gu38b9NjWMErXG_empg_BNUbYO3-3qHOau3ezR0/edit?usp=sharing/' target='_blank' rel='noopener'>Poll Guidelines</a><br> <a href='https://www.smogon.com/forums/threads/suggestions.3534365/' target='_blank' rel='noopener'>PS! Suggestions</a> | <a href='https://www.smogon.com/sim/' target='_blank' rel='noopener'>PS! Hub</a> | <a href='https://www.smogon.com/forums/threads/pok%C3%A9mon-showdown-rules-resources-read-here-first.3570628/#post-6774128' target='_blank' rel='noopener'>FAQ</a> | <a href='https://www.smogon.com/xy/articles/pkmn-101' target='_blank' rel='noopener'>Pokémon 101</a><br></span></span></div><p></p><div></div><p></p><details><summary><img src='https://i.imgur.com/KhF7uws.png' width='10' height='10'> Click for room rules! <img src='https://i.imgur.com/KhF7uws.png' width='10' height='10'></summary><ol type='1'><li style='text-align: left'>Be respectful. Don't bash, bait, or harass other users.</li><li style='text-align: left'>Don't spoil new/popular series.</li><li style='text-align: left'>No NSFW, explicit, gross, or illegal content (this includes discussion of emulation/ROMS).</li><li style='text-align: left'>Don't beg for tours; don't organize tours or leagues.</li><li style='text-align: left'>Controversial topics may be ended by staff at any time at their discretion.</li><li style='text-align: left'>PS! is not a dating site, don't look for relationships here.</li><li style='text-align: left'>Avoid discussing moderator actions in chat; please PM a member of roomstaff if you have questions or concerns.</li><li style='text-align: left'>Keep disruptive posting, such as song lyrics or irrelevant battle links, to a minimum.</li><li style='text-align: left'><b>Don't evade the filter. If the word isn't usable, there's a reason for it.</b></li></ol></details><p></p></div></div></div></div></center>");
            tabs.tabs("refresh");
            tabs.tabs("select", 0);
        });
    });

        });
