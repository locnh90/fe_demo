import { updateKichCo } from "@/app/service/sanPham/kichCo";
import { updateThuongHieu } from "@/app/service/sanPham/thuongHieu";
import { IThuongHieu } from "@/app/type/data";
import { Form, Input, message, Modal } from "antd";
import React, { useEffect } from "react";

interface IProps {
  isUpdateModal: boolean;
  setIsUpdateModal: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}
const UpdateThuongHieu = ({
  dataUpdate,
  isUpdateModal,
  setIsUpdateModal,
  setDataUpdate,
}: IProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        tenThuongHieu: dataUpdate.tenThuongHieu,
      });
    }
  }, [dataUpdate]);

  const handleCloseUpdate = () => {
    form.resetFields();
    setIsUpdateModal(false);
    setDataUpdate(null);
  };

  const onFinish = async (value: IThuongHieu) => {
    const { tenThuongHieu } = value;
    try {
      if (dataUpdate) {
        const data = {
          tenThuongHieu,
          id: dataUpdate.id, // Đảm bảo id tồn tại
        };
        console.log(data);

        const result = await updateThuongHieu(data);
        if (result.data) {
          handleCloseUpdate();
          message.success(`${result.message}`);
          console.log(result);
        } else {
          message.error(`${result.message}`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title="Cập nhật thương hiệu"
      open={isUpdateModal}
      onOk={() => form.submit()}
      onCancel={() => handleCloseUpdate()}
      maskClosable={false}
    >
      <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          label="Thương hiệu"
          name="tenThuongHieu"
          rules={[{ required: true, message: "Vui lòng nhập tên thương hiệu!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateThuongHieu;
