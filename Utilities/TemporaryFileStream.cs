﻿using System.IO;

namespace RaidProject.Utilities
{

    public class TemporaryFileStream : FileStream
    {

        public TemporaryFileStream(string path) : base(path, FileMode.Open)
        {
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
            if (File.Exists(Name)) File.Delete(Name);
        }
    }
}