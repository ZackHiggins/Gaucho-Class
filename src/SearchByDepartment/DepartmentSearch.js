import React from "react";

class DepartmentSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [
                { name: "Agency for Experimental Programs         ", code: "AEP  " },
                { name: "Anthropology                             ", code: "ANTH " },
                { name: "Arabic                                   ", code: "ARAB " },
                { name: "Art                                      ", code: "ART  " },
                { name: "Art History                              ", code: "ARTHI" },
                { name: "Art Studio                               ", code: "ARTST" },
                { name: "Asian American Studies                   ", code: "AS AM" },
                { name: "Astronomy                                ", code: "ASTRO" },
                { name: "Biochemistry - Molecular Biology         ", code: "BMB  " },
                { name: "Biology                                  ", code: "BIOL " },
                { name: "Biomolecular Science and Engineering     ", code: "BMSE " },
                { name: "Black Studies                            ", code: "BL ST" },
                { name: "Botany                                   ", code: "BOT  " },
                { name: "Chemical & Nuclear Engineering           ", code: "NUC E" },
                { name: "Chemical Engineering                     ", code: "CH E " },
                { name: "Chemistry and Biochemistry               ", code: "CHEM " },
                { name: "Chicano Studies                          ", code: "CH ST" },
                { name: "Chinese                                  ", code: "CHIN " },
                { name: "Classics                                 ", code: "CLASS" },
                { name: "Colloquium                               ", code: "COLLQ" },
                { name: "Communication                            ", code: "COMM " },
                { name: "Comparative Literature                   ", code: "C LIT" },
                { name: "Computer Science                         ", code: "CMPSC" },
                { name: "Computer Science                         ", code: "CPSCI" },
                { name: "Computer Science                         ", code: "GCMPS" },
                { name: "Computing (Creative Studies)             ", code: "CMPTG" },
                { name: "Counseling, Clinical, School Psychology  ", code: "CNCSP" },
                { name: "Dance                                    ", code: "DANCE" },
                { name: "Dramatic Art                             ", code: "DA   " },
                { name: "Dutch                                    ", code: "DUTCH" },
                { name: "Dynamical Neuroscience                   ", code: "DYNS " },
                { name: "Earth Science                            ", code: "EARTH" },
                { name: "East Asian Cultural Studies              ", code: "EACS " },
                { name: "Eastern Languages                        ", code: "AFRIC" },
                { name: "Eastern Languages                        ", code: "AMH  " },
                { name: "Eastern Languages                        ", code: "YORUB" },
                { name: "Ecology, Evolution & Marine Biology      ", code: "EEMB " },
                { name: "Economics                                ", code: "ECON " },
                { name: "Education                                ", code: "ED   " },
                { name: "Educational Arts and Crafts              ", code: "EAC  " },
                { name: "Electrical Computer Engineering          ", code: "ECE  " },
                { name: "Electrical Computer Engineering          ", code: "EE   " },
                { name: "Engineering Sciences                     ", code: "ENGR " },
                { name: "English                                  ", code: "ENGL " },
                { name: "Environmental Data Science               ", code: "EDS  " },
                { name: "Environmental Science & Management       ", code: "ESM  " },
                { name: "Environmental Studies                    ", code: "ENV S" },
                { name: "Ergonomics & Physical Education          ", code: "ERG  " },
                { name: "Ergonomics & Physical Education          ", code: "HLTH " },
                { name: "Ergonomics & Physical Education          ", code: "ERGPE" },
                { name: "Exercise & Sport Studies                 ", code: "ESS  " },
                { name: "Exercise Sport                           ", code: "ES   " },
                { name: "Feminist Studies                         ", code: "FEMST" },
                { name: "Film and Media Studies                   ", code: "FAMST" },
                { name: "Film Studies                             ", code: "FLMST" },
                { name: "French                                   ", code: "FR   " },
                { name: "General Education                        ", code: "GENED" },
                { name: "General Studies (Creative Studies)       ", code: "GEN S" },
                { name: "Geography                                ", code: "GEOG " },
                { name: "Geological Sciences                      ", code: "GEOL " },
                { name: "Geological Sciences                      ", code: "GLPHY" },
                { name: "German                                   ", code: "GER  " },
                { name: "Global Peace and Security                ", code: "GPS  " },
                { name: "Global Studies                           ", code: "GLOBL" },
                { name: "Graduate Division                        ", code: "GRAD " },
                { name: "Greek                                    ", code: "GREEK" },
                { name: "Health Education                         ", code: "H ED " },
                { name: "Hebrew                                   ", code: "HEB  " },
                { name: "History                                  ", code: "AS ST" },
                { name: "History                                  ", code: "HIST " },
                { name: "Home Economics                           ", code: "H EC " },
                { name: "Industrial Arts                          ", code: "I A  " },
                { name: "Interdisciplinary                        ", code: "INT  " },
                { name: "Islamic and Near Eastern Studies         ", code: "INEST" },
                { name: "Italian                                  ", code: "ITAL " },
                { name: "Japanese                                 ", code: "JAPAN" },
                { name: "Korean                                   ", code: "KOR  " },
                { name: "Latin                                    ", code: "LATIN" },
                { name: "Latin American and Iberian Studies       ", code: "LAIS " },
                { name: "Law and Society                          ", code: "LAWSO" },
                { name: "Linguistics                              ", code: "LING " },
                { name: "Literature (Creative Studies)            ", code: "LIT  " },
                { name: "Marine Science                           ", code: "MARSC" },
                { name: "Materials                                ", code: "MATRL" },
                { name: "Mathematics                              ", code: "MATH " },
                { name: "Mechanical Engineering                   ", code: "ME   " },
                { name: "Media Arts and Technology                ", code: "MAT  " },
                { name: "Medieval Studies                         ", code: "ME ST" },
                { name: "Middle East Studies                      ", code: "MES  " },
                { name: "Military Science                         ", code: "MS   " },
                { name: "Molecular, Cellular & Develop. Biology   ", code: "MCDB " },
                { name: "Music                                    ", code: "MUS  " },
                { name: "Music Performance Laboratories           ", code: "MUS A" },
                { name: "Natural Sciences                         ", code: "NAT S" },
                { name: "Oriental Languages                       ", code: "ELANG" },
                { name: "Philosophy                               ", code: "PHIL " },
                { name: "Physical Activities                      ", code: "PA   " },
                { name: "Physical Activities                      ", code: "PA A " },
                { name: "Physical Education                       ", code: "PE   " },
                { name: "Physics                                  ", code: "PHYS " },
                { name: "Political Science                        ", code: "POL S" },
                { name: "Portuguese                               ", code: "PORT " },
                { name: "Psychology                               ", code: "PSY  " },
                { name: "Public and Social Affairs                ", code: "PSA  " },
                { name: "Religious Studies                        ", code: "RG ST" },
                { name: "Renaissance Studies                      ", code: "RENST" },
                { name: "Russian                                  ", code: "RUSS " },
                { name: "Scandinavian                             ", code: "SCAND" },
                { name: "Semitic                                  ", code: "SEMIT" },
                { name: "Slavic                                   ", code: "SLAV " },
                { name: "Sociology                                ", code: "SOC  " },
                { name: "Spanish                                  ", code: "SPAN " },
                { name: "Speech & Hearing Sciences                ", code: "SHS  " },
                { name: "Speech & Hearing Sciences                ", code: "SPCH " },
                { name: "Statistics & Applied Probability         ", code: "PSTAT" },
                { name: "Subject A                                ", code: "SUB A" },
                { name: "Swahili                                  ", code: "SWAH " },
                { name: "Swedish                                  ", code: "SWED " },
                { name: "Technology Management                    ", code: "TMP  " },
                { name: "Theater                                  ", code: "THTR " },
                { name: "Tutorial                                 ", code: "TUTOR" },
                { name: "Women's Studies                          ", code: "WMST " },
                { name: "Writing                                  ", code: "WRIT " },
                { name: "Writing & Literature (Creative Studies)  ", code: "W&amp;L" },
                { name: "Zoology                                  ", code: "ZOOL " }
            ]
        };

        this.filterDepartments = this.filterDepartments.bind(this);
        this.selectDepartment = this.selectDepartment.bind(this);
        this.showDeptTable = this.showDeptTable.bind(this);
        this.hideDeptTable = this.hideDeptTable.bind(this);
        this.updateText = this.updateText.bind(this);
    }

    filterDepartments() {
        var filter, tr, td0, td1, i, txtValue;
        filter = document.getElementById("deptSearchInput").value.toUpperCase();
        tr = document.getElementById("deptSearchTable").getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td0 = tr[i].getElementsByTagName("td")[0];
            td1 = tr[i].getElementsByTagName("td")[1];
            if (td0) {
                txtValue = td0.innerText + td1.innerText;
                txtValue.toUpperCase().indexOf(filter) > -1
                    ? tr[i].style.display = ""
                    : tr[i].style.display = "none";
            }
        }
    }

    selectDepartment(dept) {
        this.hideDeptTable();

        console.log("Selected Department: " + dept);
        this.props.updateDept(dept);
        this.updateText(dept);
    }

    showDeptTable() {
        document.getElementById("deptSearchTable").style.display = "block";
    }

    hideDeptTable() {
        setTimeout(function () {
            document.getElementById("deptSearchTable").style.display = "none";
        }, 25);
    }

    updateText(text) {
        document.getElementById("deptSearchInput").value = text;
    }

    DepartmentList = ({ depts }) => {
        return (
            <>
                {depts.map(dept => (
                    <tr key={dept.code} onClick={() => this.selectDepartment(dept.code)}>
                        <td>{dept.code}</td>
                        <td>{dept.name}</td>
                    </tr>
                ))}
            </>
        );
    }

    render() {
        return (
            <div style={{ position: "fixed", top: 20, left: 50, right: 50, backgroundColor: "white", zIndex: 100 }}>
                <input style={{ width: "100%" }} type="text" id="deptSearchInput" onKeyUp={this.filterDepartments} onFocus={this.showDeptTable} onBlur={this.hideDeptTable} placeholder="Search for departments (e.g., CMPSC or Computer Science)" />
                <table id="deptSearchTable" style={{
                    height: 500,
                    overflowY: "scroll",
                    display: "none",
                    backgroundColor: "white",
                    width: "100%"
                }}>
                    <tr className="header">
                        <th style={{ width: "20%" }}>Code</th>
                        <th style={{ width: "80%" }}>Name</th>
                    </tr>
                    <this.DepartmentList depts={this.state.departments} />
                </table>


            </div>
        );
    }
}

export default DepartmentSearch;
