import numpy as n
from flask import Flask , render_template , redirect, url_for,request, jsonify
import GenerateSudoku as Gs
import SolveSudoku as SS
app=Flask(__name__)
def rowList(item):

    items=item.replace("[",'')
  
    items=items.replace("]",'')
    items=items.replace("\"",'')
    items=items.split(",")
  
    row=list(map(int,items))
    # print(type(row))
    return row

# @app.route("/")
# def Home():
#     return render_template("index.html")
@app.route("/",methods=["POST","GET"])
def Index():
    if request.method == 'POST':
        level=request.form.get('level')
    # print(level)
        New_Game=Gs.main(level)     
        return jsonify(
            cell_A1=str(New_Game[0,0]),
            cell_A2=str(New_Game[0,1]),
            cell_A3=str(New_Game[0,2]),
            cell_A4=str(New_Game[0,3]),
            cell_A5=str(New_Game[0,4]),
            cell_A6=str(New_Game[0,5]),
            cell_A7=str(New_Game[0,6]),
            cell_A8=str(New_Game[0,7]),
            cell_A9=str(New_Game[0,8]),
            cell_B1=str(New_Game[1,0]),
            cell_B2=str(New_Game[1,1]),
            cell_B3=str(New_Game[1,2]),
            cell_B4=str(New_Game[1,3]),
            cell_B5=str(New_Game[1,4]),
            cell_B6=str(New_Game[1,5]),
            cell_B7=str(New_Game[1,6]),
            cell_B8=str(New_Game[1,7]),
            cell_B9=str(New_Game[1,8]),
            cell_C1=str(New_Game[2,0]),
            cell_C2=str(New_Game[2,1]),
            cell_C3=str(New_Game[2,2]),
            cell_C4=str(New_Game[2,3]),
            cell_C5=str(New_Game[2,4]),
            cell_C6=str(New_Game[2,5]),
            cell_C7=str(New_Game[2,6]),
            cell_C8=str(New_Game[2,7]),
            cell_C9=str(New_Game[2,8]),
            cell_D1=str(New_Game[3,0]),
            cell_D2=str(New_Game[3,1]),
            cell_D3=str(New_Game[3,2]),
            cell_D4=str(New_Game[3,3]),
            cell_D5=str(New_Game[3,4]),
            cell_D6=str(New_Game[3,5]),
            cell_D7=str(New_Game[3,6]),
            cell_D8=str(New_Game[3,7]),
            cell_D9=str(New_Game[3,8]),
            cell_E1=str(New_Game[4,0]),
            cell_E2=str(New_Game[4,1]),
            cell_E3=str(New_Game[4,2]),
            cell_E4=str(New_Game[4,3]),
            cell_E5=str(New_Game[4,4]),
            cell_E6=str(New_Game[4,5]),
            cell_E7=str(New_Game[4,6]),
            cell_E8=str(New_Game[4,7]),
            cell_E9=str(New_Game[4,8]),
            cell_F1=str(New_Game[5,0]),
            cell_F2=str(New_Game[5,1]),
            cell_F3=str(New_Game[5,2]),
            cell_F4=str(New_Game[5,3]),
            cell_F5=str(New_Game[5,4]),
            cell_F6=str(New_Game[5,5]),
            cell_F7=str(New_Game[5,6]),
            cell_F8=str(New_Game[5,7]),
            cell_F9=str(New_Game[5,8]),
            cell_G1=str(New_Game[6,0]),
            cell_G2=str(New_Game[6,1]),
            cell_G3=str(New_Game[6,2]),
            cell_G4=str(New_Game[6,3]),
            cell_G5=str(New_Game[6,4]),
            cell_G6=str(New_Game[6,5]),
            cell_G7=str(New_Game[6,6]),
            cell_G8=str(New_Game[6,7]),
            cell_G9=str(New_Game[6,8]),
            cell_H1=str(New_Game[7,0]),
            cell_H2=str(New_Game[7,1]),
            cell_H3=str(New_Game[7,2]),
            cell_H4=str(New_Game[7,3]),
            cell_H5=str(New_Game[7,4]),
            cell_H6=str(New_Game[7,5]),
            cell_H7=str(New_Game[7,6]),
            cell_H8=str(New_Game[7,7]),
            cell_H9=str(New_Game[7,8]),
            cell_I1=str(New_Game[8,0]),
            cell_I2=str(New_Game[8,1]),
            cell_I3=str(New_Game[8,2]),
            cell_I4=str(New_Game[8,3]),
            cell_I5=str(New_Game[8,4]),
            cell_I6=str(New_Game[8,5]),
            cell_I7=str(New_Game[8,6]),
            cell_I8=str(New_Game[8,7]),
            cell_I9=str(New_Game[8,8]),
        )
    else:
        return render_template("index.html")

@app.route("/SolveSudoku", methods=['POST'])   
def SolveSudoku():
    # print(request.form["row1"])
    row1=rowList(request.form["row1"])
    row2=rowList(request.form["row2"])
    row3=rowList(request.form["row3"])
    row4=rowList(request.form["row4"])
    row5=rowList(request.form["row5"])
    row6=rowList(request.form["row6"])
    row7=rowList(request.form["row7"])
    row8=rowList(request.form["row8"])
    row9=rowList(request.form["row9"])
    grid=n.array([row1,row2,row3,row4,row5,row6,row7,row8,row9])
    # print(grid)
    Solution=SS.main(grid)
    # print(Solution)
    # return ""
    return jsonify(
        cell_A1=str(Solution[0,0]),
        cell_A2=str(Solution[0,1]),
        cell_A3=str(Solution[0,2]),
        cell_A4=str(Solution[0,3]),
        cell_A5=str(Solution[0,4]),
        cell_A6=str(Solution[0,5]),
        cell_A7=str(Solution[0,6]),
        cell_A8=str(Solution[0,7]),
        cell_A9=str(Solution[0,8]),
        cell_B1=str(Solution[1,0]),
        cell_B2=str(Solution[1,1]),
        cell_B3=str(Solution[1,2]),
        cell_B4=str(Solution[1,3]),
        cell_B5=str(Solution[1,4]),
        cell_B6=str(Solution[1,5]),
        cell_B7=str(Solution[1,6]),
        cell_B8=str(Solution[1,7]),
        cell_B9=str(Solution[1,8]),
        cell_C1=str(Solution[2,0]),
        cell_C2=str(Solution[2,1]),
        cell_C3=str(Solution[2,2]),
        cell_C4=str(Solution[2,3]),
        cell_C5=str(Solution[2,4]),
        cell_C6=str(Solution[2,5]),
        cell_C7=str(Solution[2,6]),
        cell_C8=str(Solution[2,7]),
        cell_C9=str(Solution[2,8]),
        cell_D1=str(Solution[3,0]),
        cell_D2=str(Solution[3,1]),
        cell_D3=str(Solution[3,2]),
        cell_D4=str(Solution[3,3]),
        cell_D5=str(Solution[3,4]),
        cell_D6=str(Solution[3,5]),
        cell_D7=str(Solution[3,6]),
        cell_D8=str(Solution[3,7]),
        cell_D9=str(Solution[3,8]),
        cell_E1=str(Solution[4,0]),
        cell_E2=str(Solution[4,1]),
        cell_E3=str(Solution[4,2]),
        cell_E4=str(Solution[4,3]),
        cell_E5=str(Solution[4,4]),
        cell_E6=str(Solution[4,5]),
        cell_E7=str(Solution[4,6]),
        cell_E8=str(Solution[4,7]),
        cell_E9=str(Solution[4,8]),
        cell_F1=str(Solution[5,0]),
        cell_F2=str(Solution[5,1]),
        cell_F3=str(Solution[5,2]),
        cell_F4=str(Solution[5,3]),
        cell_F5=str(Solution[5,4]),
        cell_F6=str(Solution[5,5]),
        cell_F7=str(Solution[5,6]),
        cell_F8=str(Solution[5,7]),
        cell_F9=str(Solution[5,8]),
        cell_G1=str(Solution[6,0]),
        cell_G2=str(Solution[6,1]),
        cell_G3=str(Solution[6,2]),
        cell_G4=str(Solution[6,3]),
        cell_G5=str(Solution[6,4]),
        cell_G6=str(Solution[6,5]),
        cell_G7=str(Solution[6,6]),
        cell_G8=str(Solution[6,7]),
        cell_G9=str(Solution[6,8]),
        cell_H1=str(Solution[7,0]),
        cell_H2=str(Solution[7,1]),
        cell_H3=str(Solution[7,2]),
        cell_H4=str(Solution[7,3]),
        cell_H5=str(Solution[7,4]),
        cell_H6=str(Solution[7,5]),
        cell_H7=str(Solution[7,6]),
        cell_H8=str(Solution[7,7]),
        cell_H9=str(Solution[7,8]),
        cell_I1=str(Solution[8,0]),
        cell_I2=str(Solution[8,1]),
        cell_I3=str(Solution[8,2]),
        cell_I4=str(Solution[8,3]),
        cell_I5=str(Solution[8,4]),
        cell_I6=str(Solution[8,5]),
        cell_I7=str(Solution[8,6]),
        cell_I8=str(Solution[8,7]),
        cell_I9=str(Solution[8,8]),
        

    )
        


@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/PrivacyPolicy")
def privacy():
    return render_template("Privacy.html")


if __name__=="__main__":
    app.run(debug=True)
   