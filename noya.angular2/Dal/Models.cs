using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace noya.angular2.Dal
{
    public enum Language
    {
        Hebrew, English
    }

    public enum NextData
    {
        Next, Prev, Current

    }
    public class DataRequest
    {
        public Language Language { get; set; }

    }

    public class UpdateRsponse : DataRespone
    {
        public Update[] Updates { get; set; }
    }

    public class Update
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public double Order { get; set; }
        public DateTime TimeStamp { get; set; }

    }

    public class PressResponse : DataRespone
    {
        public PressItem[] PressItems { get; set; }
    }

    public enum DataAmount
    {
        All, Single
    }

    public class ImageGalleryItem
    {
        public int ID { get; set; }
        public string ImagePath { get; set; }
        public string ImageURL { get; set; }
        public string ImageID { get; set; }
        public double Order { get; set; }
        public bool Visible { get; set; }
        public DateTime TimeStamp { get; set; }


    }



    public class ImageGalleryResponse : DataRespone
    {
        public ImageGalleryItem[] Images { get; set; }
        public ImageGalleryItem Image { get; set; }
    }
    public class MenuImageResponse : DataRespone
    {
        public string ImageURL { get; set; }

    }

    public class ImageGalleryRequest : DataRequest
    {
        public int CurrentImageID { get; set; }
        public NextData NextData { get; set; }
        public DataAmount DataAmount { get; set; }
    }

    public class MenuImageRequest : DataRequest
    {
        public string PathName { get; set; }
    }



    public class PressItem
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public DateTime TimeStamp { get; set; }

    }


    public class DataRespone
    {

    }
    public class Program
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public DateTime TimeStamp { get; set; }
        public double Order { get; set; }

    }

    public class ProgramsResponse : DataRespone
    {
        public Program[] Programs { get; set; }
    }

    public class CVResponse : DataRespone
    {
        public CV[] CVs { get; set; }
    }

    public class CalendarRequset : DataRequest
    {
        //public string Direction { get; set; }
        //public int Month { get; set; }
        //public int Year { get; set; }

        public DateTime CurrentCalendarDate { get; set; }

        public NextData NextData { get; set; }

    }

    public class CalendarResponse : DataRespone
    {
        public CalendarItem CalendarItem { get; set; }
    }

    public class CalendarItem
    {

        public string Text { get; set; }
        public bool Visible { get; set; }
        public DateTime TimeStamp { get; set; }

        public DateTime DataDate { get; set; }
        public int ID { get; set; }
    }

    public class CV
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public DateTime TimeStamp { get; set; }

    }

    public class LinksResponse : DataRespone
    {
        public Link[] Links { get; set; }
    }

    public class MenuResponse : DataRespone
    {
        public MenuItem[] MenuItems { get; set; }
    }

    public class TraverseItemResponse : DataRespone
    {
        public TraverseItem[] TraverseItems { get; set; }
    }

    public struct Link
    {


        public int ID { get; set; }
        public string Text_Heb { get; set; }
        public string Address_Heb { get; set; }
        public string Text_Eng { get; set; }
        public string Address_Eng { get; set; }
        public double Order { get; set; }
        public DateTime TimeStamp { get; set; }


        public Link(int id, string text_Heb, string address_Heb, string text_Eng, string address_Eng, double order, DateTime timeStamp)
        {
            this.ID = id;
            this.Text_Heb = text_Heb;
            this.Address_Heb = address_Heb;
            this.Address_Eng = address_Eng;
            this.Order = order;
            this.TimeStamp = timeStamp;
            this.Text_Eng = text_Eng;
        }

        public Link(int id, string text, string address, DateTime timestamp) : this()
        {
            this.ID = id;
            this.Text_Eng = text;
            this.Address_Eng = address;
            this.TimeStamp = timestamp;
        }
    }
    public class Person
    {
        public string Name { get; set; }
        public string Email { get; set; }

    }
    public class MessageResponse : DataRespone
    {

    }

    public class TraverseItem
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
    }

    public class Message
    {
        public DateTime Date { get; set; }
        public string Content { get; set; }
        public Person Sender { get; set; }
        public string IP { get; set; }
    }

    public class MessageRequest : DataRequest
    {
        public Message Message { get; set; }

    }


    public struct MenuItem
    {
        public int ID;
        public double Order;

        public string Name;
        public string Text;
        public bool isDefault;
        public int ImageID { get; set; }
        public string ImageURL { get; set; }
        public MenuItem(int id, double order, string text, bool isDefault, string name, int imageID, string imageURL)
        {
            this.ID = id;
            this.Order = order;
            this.Text = text;
            this.isDefault = isDefault;
            this.Name = name;
            this.ImageID = imageID;
            this.ImageURL = imageURL;
        }

    }
}